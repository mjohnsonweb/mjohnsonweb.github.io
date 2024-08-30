const express = require('express');
const multer = require('multer');
const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

const octokit = new Octokit({
    auth: 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'
});

app.post('/upload', upload.single('file'), async (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileContent = fs.readFileSync(filePath);

    const name = req.body.name;
    const subgroup = req.body.subgroup;
    const summary = req.body.summary;

    const imageName = req.file.originalname;
    const imagePath = `images/${name}_${subgroup}_${imageName}`;

    try {
        await octokit.repos.createOrUpdateFileContents({
            owner: 'mjohnsonweb',
            repo: 'mjohnsonweb.github.io',
            path: imagePath,
            message: `Upload ${imageName}`,
            content: fileContent.toString('base64'),
        });

        fs.unlinkSync(filePath); // Remove the file after uploading

        // Save metadata
        await octokit.repos.createOrUpdateFileContents({
            owner: 'mjohnsonweb',
            repo: 'mjohnsonweb.github.io',
            path: `metadata/${name}_${subgroup}_${imageName}.json`,
            message: `Metadata for ${imageName}`,
            content: Buffer.from(JSON.stringify({ summary })).toString('base64'),
        });

        res.status(200).send('Image uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
