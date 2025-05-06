import { useState, useEffect } from 'react';

function QuizApp() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [timer, setTimer] = useState(5);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Fetch questions from OpenDB API
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then(response => response.json())
            .then(data => {
                const formattedQuestions = data.results.map(q => ({
                    question: q.question,
                    answers: [...q.incorrect_answers, q.correct_answer]
                        .sort(() => Math.random() - 0.5),
                    correctAnswer: q.correct_answer
                }));
                setQuestions(formattedQuestions);
            });
    }, []);

    // Countdown timer
    useEffect(() => {
        if (timer === 0) {
            handleAnswerSelect(null);
            return;
        }
        if (questions.length > 0 && !showResults) {
            const timerId = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timer, questions, showResults]);

    // Handle answer selection
    const handleAnswerSelect = (answer) => {
        if (selectedAnswer) return; // Prevent multiple selections
        
        setSelectedAnswer(answer);
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(prev => prev + 1);
                setTimer(5);
                setSelectedAnswer(null);
            } else {
                setShowResults(true);
            }
        }, 1000);
    };

    // Restart quiz
    const restartQuiz = () => {
        setQuestions([]);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setTimer(5);
        setSelectedAnswer(null);
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then(response => response.json())
            .then(data => {
                const formattedQuestions = data.results.map(q => ({
                    question: q.question,
                    answers: [...q.incorrect_answers, q.correct_answer]
                        .sort(() => Math.random() - 0.5),
                    correctAnswer: q.correct_answer
                }));
                setQuestions(formattedQuestions);
            });
    };

    // Decode HTML entities
    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    if (questions.length === 0) {
        return (
            <div className="text-center mt-30">
                <h1 className="text-3xl font-bold mb-4">Loading Quiz...</h1>
            </div>
        );
    }

    if (showResults) {
        return (
            <div className="bg-white p-6 rounded-lg text-center mt-20">
                <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
                <p className="text-4xl mb-4">Your Score: <spam className="text-green-500">{score}</spam> / {questions.length}</p>
                <br></br>
                <button 
                    onClick={restartQuiz}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="bg-white p-10 rounded-lg border-1 mt-20 ml-30 mr-30">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">
                    Question : <spam className="text-red-500">{currentQuestion + 1}</spam> of {questions.length}
                </h2>
                <div className="text-xl font-semibold">
                    Time left : <spam className="text-red-500">{timer}</spam> second
                </div>
            </div>
            <br></br>
            <h3 
                className="text-lg mb-6" 
                dangerouslySetInnerHTML={{ __html: decodeHtml(currentQ.question) }}
            />
            <div className="grid gap-4">
                {currentQ.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(answer)}
                        disabled={selectedAnswer !== null}
                        className={`p-3 rounded text-left border-2
                            ${selectedAnswer === answer 
                                ? 'bg-blue-100 border-blue-500' 
                                : 'bg-gray-200 hover:bg-gray-200'
                            } 
                            ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        dangerouslySetInnerHTML={{ __html: decodeHtml(answer) }}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuizApp;