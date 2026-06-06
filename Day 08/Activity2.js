const freind=["Darshana","Peshan","Dinal","Kehan","Jimuth","Sathishka","Ashan","Chandana","Sadeepa","Pulasthi"];
for(let key of freind){
console.log(key);}

console.log("After Modification");
freind[2]="Mithu";
for(let key of freind){
console.log(key);}


console.log("After Adding New Name");
freind.push("Tom");
for(let key of freind){
console.log(key);}

console.log("After Removing last item in array");
freind.pop("Tom");
for(let key of freind){
console.log(key);}




