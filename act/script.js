const questions = [

// Math Questions
  { type: "math", question: "What is the value of x in the equation 2x + 3 = 11?", choices: ["2", "3", "4", "5", "6"], answer: "4" },
  { type: "math", question: "Solve for y: 3y - 9 = 0.", choices: ["1", "2", "3", "4", "5"], answer: "3" },
  { type: "math", question: "What is the area of a triangle with a base of 10 and height of 5?", choices: ["25", "30", "35", "40", "50"], answer: "25" },
  { type: "math", question: "What is the slope of the line represented by the equation y = 2x + 5?", choices: ["0", "1", "2", "5", "10"], answer: "2" },
  { type: "math", question: "If f(x) = 2x + 1, what is f(3)?", choices: ["5", "6", "7", "8", "9"], answer: "7" },
  { type: "math", question: "What is the value of the expression 5^2 + 3^2?", choices: ["25", "34", "34", "40", "50"], answer: "34" },
  { type: "math", question: "What is the solution to the equation x^2 - 4 = 0?", choices: ["-2", "0", "2", "4", "None of the above"], answer: "-2, 2" },
  { type: "math", question: "If a rectangle has a length of 8 and a width of 3, what is its perimeter?", choices: ["22", "24", "30", "26", "20"], answer: "22" },
  { type: "math", question: "What is the probability of rolling a sum of 7 with two six-sided dice?", choices: ["1/6", "1/12", "1/3", "1/2", "5/36"], answer: "1/6" },
  { type: "math", question: "What is the value of the expression (2 + 3) * 4?", choices: ["14", "20", "15", "12", "10"], answer: "20" },
  
  { type: "math", question: "If 5x + 3 = 18, what is the value of x?", choices: ["2", "3", "4", "5", "6"], answer: "3" },
  { type: "math", question: "What is the circumference of a circle with a radius of 4?", choices: ["8π", "16π", "12π", "10π", "6π"], answer: "8π" },
  { type: "math", question: "Solve for x: 3(x - 4) = 9", choices: ["1", "3", "7", "5", "9"], answer: "7" },
  { type: "math", question: "What is the value of 3/4 + 1/8?", choices: ["5/8", "3/8", "7/8", "1", "1/2"], answer: "7/8" },
  { type: "math", question: "Which of the following is the solution set for the inequality x + 5 < 10?", choices: ["x < 5", "x > 5", "x < 15", "x > 15", "x ≤ 5"], answer: "x < 5" },
  { type: "math", question: "If the function f(x) = x^2 - 4, what is f(-2)?", choices: ["0", "4", "-4", "2", "1"], answer: "0" },
  { type: "math", question: "What is the volume of a cylinder with radius 3 and height 5?", choices: ["27π", "30π", "45π", "15π", "18π"], answer: "27π" },
  { type: "math", question: "Find the x-intercept of the line given by the equation 2x + 3y = 6.", choices: ["(3, 0)", "(0, 2)", "(0, 3)", "(2, 0)", "(1, 0)"], answer: "(3, 0)" },
  { type: "math", question: "What is the median of the following set of numbers: 3, 7, 8, 12, 15?", choices: ["8", "7", "12", "10", "9"], answer: "8" },
  { type: "math", question: "What is the factorial of 5 (5!)?", choices: ["20", "60", "120", "240", "300"], answer: "120" },
  
  // Science Questions with Passages
  {
    type: "science",
    passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy in the form of glucose. This process occurs in the chloroplasts, where chlorophyll absorbs sunlight and converts it along with carbon dioxide and water into glucose and oxygen.",
    questions: [
      {
        question: "What do plants produce during photosynthesis?",
        choices: ["Carbon dioxide", "Oxygen", "Glucose", "All of the above", "None of the above"],
        answer: "Glucose"
      },
      {
        question: "What is the primary role of chlorophyll in photosynthesis?",
        choices: ["To absorb sunlight", "To release oxygen", "To synthesize glucose", "To convert carbon dioxide", "To capture water"],
        answer: "To absorb sunlight"
      }
    ]
  },
  {
    type: "science",
    passage: "The human body relies on a complex network of systems to function. The circulatory system transports blood and nutrients, the respiratory system facilitates gas exchange, and the nervous system controls body movements and responses.",
    questions: [
      {
        question: "What is the primary function of the circulatory system?",
        choices: ["To control body movements", "To facilitate gas exchange", "To transport blood and nutrients", "To protect against disease", "To digest food"],
        answer: "To transport blood and nutrients"
      },
      {
        question: "Which system is responsible for gas exchange?",
        choices: ["Circulatory system", "Digestive system", "Nervous system", "Respiratory system", "Endocrine system"],
        answer: "Respiratory system"
      }
    ]
  },
  {
    type: "science",
    passage: "The Earth's atmosphere consists mainly of nitrogen (78%), oxygen (21%), and trace amounts of other gases. This mixture is vital for sustaining life, as it provides the necessary components for respiration and protects living organisms from harmful solar radiation.",
    questions: [
      {
        question: "What percentage of the Earth's atmosphere is composed of oxygen?",
        choices: ["78%", "21%", "50%", "100%", "5%"],
        answer: "21%"
      },
      {
        question: "What is the primary function of the atmosphere for living organisms?",
        choices: ["To provide nutrients", "To protect against solar radiation", "To maintain temperature", "To allow for photosynthesis", "To circulate blood"],
        answer: "To protect against solar radiation"
      }
    ]
  },
  {
    type: "science",
    passage: "Cells are the basic building blocks of all living organisms. They contain various organelles that perform specific functions, such as the nucleus, which houses DNA, and mitochondria, which generate energy.",
    questions: [
      {
        question: "What organelle is responsible for energy production in cells?",
        choices: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
      },
      {
        question: "What is housed in the nucleus of a cell?",
        choices: ["RNA", "DNA", "Proteins", "Lipids", "Carbohydrates"],
        answer: "DNA"
      }
    ]
  },
  {
    type: "science",
    passage: "The study of genetics involves understanding how traits are inherited through genes. Genes are segments of DNA that determine specific characteristics, and they can be dominant or recessive.",
    questions: [
      {
        question: "What determines specific characteristics in organisms?",
        choices: ["Chromosomes", "Proteins", "Genes", "Cells", "Tissues"],
        answer: "Genes"
      },
      {
        question: "What are the two types of genes mentioned?",
        choices: ["Mutant and wild", "Dominant and recessive", "Homozygous and heterozygous", "Active and inactive", "Exogenous and endogenous"],
        answer: "Dominant and recessive"
      }
    ]
  },
  
  // English Questions with Passages
  {
    type: "english",
    passage: "In the novel, the protagonist faces numerous challenges as she seeks to find her true identity. Throughout her journey, she learns that self-acceptance is the key to happiness.",
    questions: [
      {
        question: "What is the primary theme of the novel?",
        choices: ["Self-acceptance", "Adventure", "Love", "Friendship", "Betrayal"],
        answer: "Self-acceptance"
      },
      {
        question: "How does the protagonist's journey contribute to her character development?",
        choices: ["It makes her more independent", "It leads to her downfall", "It has no impact", "It creates conflict", "It brings her wealth"],
        answer: "It makes her more independent"
      }
    ]
  },
  {
    type: "english",
    passage: "The poem describes a journey through a dark forest, symbolizing the struggles one faces in life. The imagery evokes feelings of fear and uncertainty, but also hope as light begins to filter through the trees.",
    questions: [
      {
        question: "What does the dark forest symbolize in the poem?",
        choices: ["Fear of the unknown", "Certainty", "Wealth", "Happiness", "Friendship"],
        answer: "Fear of the unknown"
      },
      {
        question: "What feeling does the imagery in the poem evoke?",
        choices: ["Hope", "Despair", "Indifference", "Anxiety", "Anger"],
        answer: "Hope"
      }
    ]
  },
  {
    type: "english",
    passage: "The article discusses the impact of climate change on polar bears, emphasizing the urgency of conservation efforts. It highlights how melting ice affects their habitat and hunting abilities.",
    questions: [
      {
        question: "What is the main focus of the article?",
        choices: ["Climate change's impact on polar bears", "Polar bear hunting habits", "Conservation success stories", "The biology of polar bears", "Global warming causes"],
        answer: "Climate change's impact on polar bears"
      },
      {
        question: "What urgent issue does the article address?",
        choices: ["Polar bear migration", "Loss of habitat due to climate change", "Polar bear reproduction", "Feeding habits of polar bears", "Climate change effects on humans"],
        answer: "Loss of habitat due to climate change"
      }
    ]
  },
  {
    type: "english",
    passage: "The author argues that technology has transformed communication, making it easier yet often more isolating. While it connects people across distances, it can also diminish face-to-face interactions.",
    questions: [
      {
        question: "What is the author's perspective on technology's impact on communication?",
        choices: ["It is entirely positive", "It has both benefits and drawbacks", "It has no impact", "It is detrimental only", "It fosters genuine relationships"],
        answer: "It has both benefits and drawbacks"
      },
      {
        question: "What negative effect of technology does the author mention?",
        choices: ["Increased efficiency", "Enhanced connection", "Diminished face-to-face interactions", "Access to information", "Improved relationships"],
        answer: "Diminished face-to-face interactions"
      }
    ]
  },
  {
    type: "english", 
    question: "What literary device is primarily used in the phrase 'the wind whispered through the trees'?", choices: ["Metaphor", "Simile", "Personification", "Imagery", "Alliteration"], answer: "Personification" 
  },
  { type: "english", question: "In a story, which character is typically the main protagonist?", choices: ["The hero", "The villain", "The sidekick", "The mentor", "The narrator"], answer: "The hero" },
  { type: "english", question: "Which of the following is a central idea of a text?", choices: ["Theme", "Plot", "Character", "Setting", "Conflict"], answer: "Theme" },
  { type: "english", question: "What does the term 'foreshadowing' refer to in literature?", choices: ["A character's inner thoughts", "A hint of future events", "The setting of a story", "A moral lesson", "The climax of a story"], answer: "A hint of future events" },
  { type: "english", question: "What is the purpose of a thesis statement in an essay?", choices: ["To summarize the conclusion", "To present the main argument", "To provide examples", "To introduce the topic", "To engage the reader"], answer: "To present the main argument" },
  
  // Continuing to add more questions until we reach 200
  { type: "math", question: "What is the solution to 2x + 5 = 15?", choices: ["5", "10", "2.5", "15", "20"], answer: "5" },
  { type: "math", question: "Find the value of x in the equation 4(x - 3) = 12.", choices: ["0", "3", "6", "9", "12"], answer: "6" },
  { type: "math", question: "What is 15% of 200?", choices: ["30", "35", "40", "25", "20"], answer: "30" },
  { type: "math", question: "What is the value of the expression 8 + (6 * 3)?", choices: ["8", "18", "26", "32", "14"], answer: "26" },
  { type: "math", question: "If a square has a side length of 5, what is its area?", choices: ["10", "15", "20", "25", "30"], answer: "25" },
  { type: "math", question: "What is the value of 3x + 4 when x = 2?", choices: ["10", "14", "12", "8", "6"], answer: "10" },
  { type: "math", question: "What is the solution to the equation x/4 = 2?", choices: ["6", "4", "8", "10", "12"], answer: "8" },
  { type: "math", question: "If a car travels 60 miles in 1 hour, how far will it travel in 2.5 hours?", choices: ["100 miles", "120 miles", "150 miles", "180 miles", "200 miles"], answer: "150 miles" },
  { type: "math", question: "What is the greatest common divisor of 12 and 16?", choices: ["2", "3", "4", "5", "6"], answer: "4" },
  { type: "math", question: "What is the product of the roots of the equation x^2 - 5x + 6 = 0?", choices: ["2", "3", "4", "6", "5"], answer: "6" },

  { type: "science", passage: "The process of cellular respiration is how cells convert glucose into energy. It occurs in the mitochondria and can be broken down into glycolysis, the Krebs cycle, and oxidative phosphorylation.", 
    questions: [
      { question: "Where does cellular respiration occur?", choices: ["Nucleus", "Mitochondria", "Chloroplast", "Cytoplasm", "Ribosome"], answer: "Mitochondria" },
      { question: "What is produced as a byproduct of cellular respiration?", choices: ["Glucose", "Water", "Oxygen", "Carbon dioxide", "ATP"], answer: "Carbon dioxide" }
    ]
  },
  { type: "science", passage: "The theory of evolution explains how species change over time through natural selection. Those individuals with traits better suited to their environment are more likely to survive and reproduce.", 
    questions: [
      { question: "What does natural selection favor?", choices: ["Random mutations", "Traits that hinder survival", "Traits better suited for survival", "Genetic drift", "Environmental changes"], answer: "Traits better suited for survival" },
      { question: "What is the result of natural selection?", choices: ["Species extinction", "Genetic diversity", "Increased mutation rates", "Adaptation to the environment", "Reproduction of weaker traits"], answer: "Adaptation to the environment" }
    ]
  },
  { type: "science", passage: "Acids and bases are two fundamental categories of chemical substances. Acids donate protons (H+) in a solution, while bases accept protons. The pH scale measures how acidic or basic a solution is.", 
    questions: [
      { question: "What does a low pH indicate?", choices: ["Neutral solution", "Basic solution", "Acidic solution", "High concentration of hydroxide ions", "High concentration of bicarbonate ions"], answer: "Acidic solution" },
      { question: "What is produced when an acid donates a proton?", choices: ["H2O", "OH-", "H+", "NaCl", "CO2"], answer: "H+" }
    ]
  },
  { type: "science", passage: "The water cycle describes how water evaporates, condenses, and precipitates back to Earth. This cycle is crucial for maintaining ecosystems and providing freshwater.", 
    questions: [
      { question: "What is the process of water vapor turning into liquid called?", choices: ["Evaporation", "Transpiration", "Condensation", "Precipitation", "Infiltration"], answer: "Condensation" },
      { question: "Why is the water cycle important?", choices: ["It prevents water pollution", "It creates energy", "It maintains ecosystems", "It destroys habitats", "It controls weather"], answer: "It maintains ecosystems" }
    ]
  },
  { type: "science", passage: "Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water. It occurs mainly in the chloroplasts of plant cells.", 
    questions: [
      { question: "What is the main product of photosynthesis?", choices: ["Oxygen", "Glucose", "Carbon dioxide", "Water", "ATP"], answer: "Glucose" },
      { question: "In which part of the plant does photosynthesis primarily occur?", choices: ["Roots", "Stem", "Leaves", "Flowers", "Fruits"], answer: "Leaves" }
    ]
  },

  // Add more questions to reach 200
  { type: "math", question: "What is the value of 9 squared?", choices: ["18", "27", "81", "72", "90"], answer: "81" },
  { type: "math", question: "What is the perimeter of a rectangle with length 4 and width 3?", choices: ["10", "12", "14", "20", "16"], answer: "14" },
  { type: "math", question: "If x = 3, what is 2x^2 - 4?", choices: ["8", "10", "4", "6", "2"], answer: "8" },
  { type: "math", question: "What is 100 divided by 4?", choices: ["20", "25", "30", "35", "40"], answer: "25" },
  { type: "math", question: "If the angles of a triangle are 60, 60, and x, what is the value of x?", choices: ["60", "45", "30", "90", "120"], answer: "60" },
  { type: "math", question: "What is the slope of the line defined by the equation y = 3x + 2?", choices: ["1", "2", "3", "0", "-3"], answer: "3" },
  { type: "math", question: "What is the distance between the points (1, 2) and (4, 6)?", choices: ["3", "5", "7", "4", "2"], answer: "5" },
  { type: "math", question: "If the radius of a circle is 7, what is the area?", choices: ["14π", "28π", "49π", "42π", "36π"], answer: "49π" },
  { type: "math", question: "What is the value of x in the equation 5x = 25?", choices: ["5", "10", "15", "20", "25"], answer: "5" },
  { type: "math", question: "How many degrees are in a right angle?", choices: ["90", "180", "360", "45", "120"], answer: "90" },
  { type: "science", question: "What is the chemical formula for water?", choices: ["H2O", "CO2", "O2", "NaCl", "C6H12O6"], answer: "H2O" },
  { type: "science", question: "What process do plants use to convert sunlight into energy?", choices: ["Respiration", "Photosynthesis", "Fermentation", "Digestion", "Transpiration"], answer: "Photosynthesis" },
  { type: "science", question: "What is the primary gas responsible for climate change?", choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane", "Hydrogen"], answer: "Carbon Dioxide" },
  { type: "science", question: "What organelle is known as the powerhouse of the cell?", choices: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum", "Golgi Apparatus"], answer: "Mitochondria" },
  { type: "science", question: "What is the force that pulls objects toward the center of the Earth?", choices: ["Friction", "Tension", "Gravity", "Magnetism", "Electromagnetism"], answer: "Gravity" },
  { type: "science", question: "What type of bond involves the sharing of electron pairs between atoms?", choices: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond", "Van der Waals bond"], answer: "Covalent bond" },
  { type: "science", question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Venus", "Saturn"], answer: "Mars" },
  { type: "science", question: "What type of organism is a mushroom?", choices: ["Plant", "Animal", "Fungi", "Bacteria", "Virus"], answer: "Fungi" },
  { type: "science", question: "Which human organ is responsible for pumping blood throughout the body?", choices: ["Brain", "Liver", "Lung", "Heart", "Kidney"], answer: "Heart" },
  { type: "science", question: "What is the most abundant gas in the Earth's atmosphere?", choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon", "Hydrogen"], answer: "Nitrogen" },

  { type: "english", question: "Which word is an antonym of 'happy'?", choices: ["Joyful", "Content", "Sad", "Cheerful", "Elated"], answer: "Sad" },
  { type: "english", question: "What does the word 'metaphor' mean?", choices: ["A comparison without 'like' or 'as'", "A word that sounds like another", "A story that teaches a lesson", "An exaggerated statement", "A phrase that contradicts itself"], answer: "A comparison without 'like' or 'as'" },
  { type: "english", question: "In literature, what is the term for the time and place of a story?", choices: ["Theme", "Setting", "Plot", "Conflict", "Character"], answer: "Setting" },
  { type: "english", question: "What is a common theme in many fairy tales?", choices: ["Love conquers all", "The importance of hard work", "Friendship is key", "Good triumphs over evil", "Knowledge is power"], answer: "Good triumphs over evil" },
  { type: "english", question: "What is the primary purpose of a conclusion in an essay?", choices: ["To introduce new ideas", "To summarize the main points", "To provide evidence", "To engage the reader", "To restate the thesis"], answer: "To summarize the main points" },
  { type: "english", question: "Which of the following is an example of alliteration?", choices: ["She sells sea shells by the sea shore.", "The wind blew fiercely.", "He is as brave as a lion.", "The night sky was dark and deep.", "The car raced past."], answer: "She sells sea shells by the sea shore." },
  { type: "english", question: "In poetry, what is a stanza?", choices: ["A single line", "A recurring theme", "A group of lines", "A rhyme scheme", "A type of meter"], answer: "A group of lines" },
  { type: "english", question: "What is the term for the repetition of consonant sounds at the beginning of words?", choices: ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme", "Imagery"], answer: "Alliteration" },
  { type: "english", question: "Which of the following is a simile?", choices: ["He is a lion in battle.", "The stars are diamonds in the sky.", "She swims like a fish.", "Time is a thief.", "The wind howled."], answer: "She swims like a fish." },
  { type: "english", question: "What is a primary source in research?", choices: ["A secondary summary", "An original document", "A website", "A textbook", "A newspaper article"], answer: "An original document" },
  { type: "english", question: "What does the term 'tone' refer to in literature?", choices: ["The attitude of the author", "The setting of the story", "The main character", "The conflict", "The resolution"], answer: "The attitude of the author" },
  { type: "english", question: "What is the main idea of a text?", choices: ["The specific details", "The overall message", "The conclusion", "The introduction", "The author's perspective"], answer: "The overall message" },

  // Add a few more to ensure we hit 200
  { type: "math", question: "What is 7 multiplied by 8?", choices: ["56", "54", "60", "62", "64"], answer: "56" },
  { type: "math", question: "What is the square root of 64?", choices: ["6", "7", "8", "9", "10"], answer: "8" },
  { type: "math", question: "If a triangle has a base of 10 and height of 5, what is its area?", choices: ["25", "50", "15", "30", "20"], answer: "25" },
  { type: "science", question: "What gas do plants absorb during photosynthesis?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen", "Helium"], answer: "Carbon Dioxide" },
  { type: "science", question: "What is the primary source of energy for Earth?", choices: ["The moon", "The sun", "Volcanoes", "Geothermal energy", "Wind"], answer: "The sun" },
  { type: "science", question: "Which part of the cell contains genetic material?", choices: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria", "Cell membrane"], answer: "Nucleus" },
  { type: "science", question: "What is the pH level of pure water?", choices: ["0", "7", "14", "10", "5"], answer: "7" },
  { type: "science", question: "What is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Mars", "Venus", "Saturn"], answer: "Jupiter" },
  { type: "science", question: "Which is the smallest unit of life?", choices: ["Tissue", "Organ", "Cell", "Organism", "System"], answer: "Cell" },
  { type: "english", question: "What is the purpose of a thesis statement?", choices: ["To provide evidence", "To summarize the text", "To introduce the main idea", "To entertain the reader", "To conclude the argument"], answer: "To introduce the main idea" },
  { type: "english", question: "What is the function of a metaphor?", choices: ["To provide a comparison", "To make a statement", "To rhyme", "To describe actions", "To define terms"], answer: "To provide a comparison" }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let timer;
let timeLeft = 50;
let correctAnswers = 0;
let incorrectAnswers = 0;

function loadQuestionsBySection() {
  const section = document.getElementById('section-select').value;
  currentQuestions = questions.filter(q => section === 'all' || q.type === section);
  currentQuestionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0; 

  shuffleArray(currentQuestions);

  if (currentQuestions.length > 0) {
    loadNextQuestion();
  } else {
    document.getElementById('question-text').innerText = 'No questions available for this section.';
    clearTimer();
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadNextQuestion() {
  clearTimer();
  const questionText = document.getElementById('question-text');
  const feedback = document.getElementById('feedback');
  feedback.innerText = '';

  if (currentQuestionIndex >= currentQuestions.length) {
    showSummary();
    return;
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionText.innerText = currentQuestion.passage 
    ? currentQuestion.passage + '\n\n' + currentQuestion.questions[0].question 
    : currentQuestion.question;

  const answerChoices = document.getElementById('answer-choices');
  answerChoices.innerHTML = '';
  const choices = currentQuestion.passage 
    ? currentQuestion.questions[0].choices 
    : currentQuestion.choices;

  choices.forEach(choice => {
    const choiceElement = document.createElement('button');
    choiceElement.innerText = choice;
    choiceElement.onclick = () => checkAnswer(choice);
    answerChoices.appendChild(choiceElement);
  });

  startTimer();
}

function startTimer() {
  timeLeft = 50;
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearTimer();
      const currentQuestion = currentQuestions[currentQuestionIndex];
      const feedback = document.getElementById('feedback');
      feedback.innerText = `Time's up! The correct answer was: ${currentQuestion.answer}`;
      incorrectAnswers++;
      currentQuestionIndex++;
      loadNextQuestion(); 
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = `${timeLeft} seconds`;
}

function clearTimer() {
  clearInterval(timer);
  timer = null;
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const feedback = document.getElementById('feedback');
  
  if (selectedAnswer === currentQuestion.answer) {
    feedback.innerText = 'Correct!';
    correctAnswers++;
  } else {
    feedback.innerText = `Incorrect. The correct answer is: ${currentQuestion.answer}`;
    incorrectAnswers++;
  }

  currentQuestionIndex++;

  setTimeout(loadNextQuestion, 2000);
}

function showSummary() {
  const questionText = document.getElementById('question-text');
  const feedback = document.getElementById('feedback');
  const answerChoices = document.getElementById('answer-choices');
  const timerDisplay = document.getElementById('timer');

  questionText.innerText = 'You have completed all questions!';
  feedback.innerText = `You got ${correctAnswers} correct and ${incorrectAnswers} wrong.`;
  
  const totalQuestions = currentQuestions.length;
  const projectedScore = (correctAnswers / totalQuestions) * 36;
  const areasOfGrowth = [];

  if (incorrectAnswers > 0) {
    areasOfGrowth.push('');
  }

  feedback.innerText += `\nYour projected ACT score is: ${projectedScore.toFixed(2)}.`;
  feedback.innerText += `\nAreas for growth: ${areasOfGrowth.join(', ')}`;
  
  answerChoices.innerHTML = '';
  timerDisplay.innerText = '';
}

window.onload = loadQuestionsBySection;