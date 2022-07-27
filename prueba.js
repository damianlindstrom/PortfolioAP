
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function myfunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
};

let textarea = document.getElementById("edit-acercade")
textarea.addEventListener("keyup", (e) => {
    if (e.key =="Enter"){
        document.getElementById("edit-acercade").style.display="none";
    }
});

function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    };
};

function agregar_experiencia(){
    document.getElementById("exp1").style.display="block";
    document.getElementById("exp-img").style.display="block";
    let texto = document.getElementById("current-exp-title").innerText;
    console.log(texto);
}
function mod_title(valor){
    document.getElementById("current-exp-title").innerText=valor;
};
function mod_img(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);
    document.getElementById("current-exp-img").src=file;
};
let titlearea = document.getElementById("exp1")
titlearea.addEventListener("keyup", (e) => {
    if (e.key =="Enter"){
        document.getElementById("exp1").style.display="none";
    }
});
