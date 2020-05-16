names=["mehul","jyoti","Jigna","chirag","divya","jaimin","rahul","mayur"];
for(var i=0;i<names.length;i++){
    if(names[i].startsWith("j")){
        console.log("goodbye "+names[i]);
    }
    else if(names[i].startsWith("J")){
        console.log("goodbye "+names[i]);
    }
    else{
        console.log("hello "+names[i]);
    }
}
