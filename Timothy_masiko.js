//person object 

var person={
    age:23,
    gender:'male',
    mother:'her',
    father:'him',
    status:'married',

    age_func:function(){
        console.log(this.age)

    },
    gender_func:function(){
        console.log(this.gender)
    }
};
// person method invocation
person.age_func();
person.gender_func();

// student object

var student={
    age:23,
    gender:'male',
    regno:"xx1213",
    school:'cocis',
    certified:'yes',
    std_age:function(){
        console.log(this.age)

    },
    regnumber:function(){
        console.log(this.regno)
    }
};

// student method invocation
student.std_age();
student.regnumber();


//department object

var department={
    name:"cocis",
    regsitered:'yes',
    school:'IT',
    numofstds:343,
    staff:243,
    deptname:function(){
        console.log(this.name)

    },
    deptreg:function(){
        console.log(this.regsitered)
    }
};

//department method invocation
department.deptname();
department.deptreg();

//child object

var child={
    age:5,
    gender:'male',
    mother:'her',
    father:'him',
    size:23,
    child_age:function(){
        console.log(this.age)

    },
    gend:function(){
        console.log(this.gender)
    }
};
// child method invocation
child.child_age();
child.gend();

//bar object

var bar={
    name:'h2o',
    drinks:50,
    avg_no_people:323,
    partners:3,
    location:'6th street',



    name_bar:function(){
        console.log(this.name)

    },
    numofdrinks:function(){
        console.log(this.drinks)
    }
}


bar.name_bar();
bar.numofdrinks();



