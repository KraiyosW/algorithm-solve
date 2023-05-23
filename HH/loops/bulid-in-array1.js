let words = ['hello', 'world'];

function getWordLengths(words) {
    let countWords = words.map(word => word.length)
    return countWords
}

console.log(getWordLengths(words))




let words1 = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
    let filterWordLength = words.filter(word =>  word.length >=5 )
    return filterWordLength
}

console.log(get5CharWords(words1))



const todos = [
    { topic: 'Doing pre-work', completed: true },
    { topic: 'Workout', completed: false },
    { topic: 'Playing computer games', completed: true },
    { topic: 'Relax', completed: false },
    { topic: 'Clean the room', completed: true }
  ];
  
  function getTodoTopics(todos) {

    let todo = todos.map(todo => todo.topic)

    return todo;
  }

  console.log(getTodoTopics(todos));


  function getCompletedTodo(todos) {

    let todoFinised = todos.filter((todo)=>{
        return todo.completed === true
    })

    return todoFinised
  }

  console.log(getCompletedTodo(todos));
  
  const students = [
	{ name: "John", score: 80 },
	{ name: "Jane", score: 90 },
	{ name: "Jim", score: 85 },
	{ name: "Joan", score: 95 }
];

function getAverageStudentScore(students) {
    let countStudent = students.length;
    let avgScore = students.reduce((acc,curr)=>{
        return acc = acc + curr.score
    },0)
    
    let result = avgScore/countStudent

    return result
}

console.log(getAverageStudentScore(students))

