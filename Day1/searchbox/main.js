let students = [
    {
        "name" : "Mridul",
        "Desc" : "Former intern at Aukland university"
    },
    {
        "name" : "Mahak",
        "Desc" : "Don't be mistaken by the name, she is a boy."
    },
    {
        "name" : "Aniswar",
        "Desc" : "Makes sexist memes and then posts it on FB."
    },
    {
        "name" : "Manan",
        "Desc" : "loves hanging out with friends doesn't care for socio exam."
    },
    {
        "name" : "Shatadru",
        "Desc" : "Master of python, but can't handle his own python."
    },
    {
        "name" : "TMCP",
        "Desc" : "Congrats man, you defeated NOTA!"
    },
    {
        "name" : "Sayak",
        "Desc": "Long distance is not my thing so I leave it at \"It's complicated\""
    },
    {
        "name" : "Margot Robbie",
        "Desc": "Talented and hot &hearts;"
    },

]

function search(substr){
    array = []
    
    let arraylen = students.length;
    for(let i = 0; i<arraylen; i++){
        if(students[i].name.toLocaleLowerCase().includes(substr)){
            array.push(students[i]);
        }
    }
    console.log(array);
    return (array)
    
}

function render(){
    try {
        var substr = document.getElementById("search").value.toLowerCase();
    } catch{
        var substr = "";
    }
    
    let arr = search(substr);
    results = document.getElementById("details");
    results.innerHTML = '';
    let ul = document.createElement("ul");
    arr.forEach(element => {
        let li = document.createElement("li")

        let name = document.createElement("div");
        name.innerHTML = element.name;
        let desc = document.createElement("div");
        desc.innerHTML = element.Desc;
        
        li.appendChild(name);
        li.appendChild(desc);
        ul.appendChild(li);
        
    });
    results.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', (event) => {
    render();
});
