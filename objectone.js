  let student = {
      name:"Nisha",
      class:"one",
      age:'12',
      subject:"english",

      exam: function(){
          let message = "the exam will be held on saturday";
          return message;
      },

      test: function(){
          let message=" the test will be";
          return message;
      }
  }
  document.write(student.name + ' ' + student.exam()+',');
  document.write(student.test());