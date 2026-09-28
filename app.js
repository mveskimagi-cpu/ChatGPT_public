const KEY="taskflow.tasks.v1";
let tasks=JSON.parse(localStorage.getItem(KEY)||"[]");
let filter="all";
const list=document.querySelector("#taskList");
const stats=document.querySelector("#stats");
const input=document.querySelector("#taskInput");
const save=()=>localStorage.setItem(KEY,JSON.stringify(tasks));
function render(){
  list.innerHTML="";
  const visible=tasks.filter(t=>filter==="all"||filter==="done"&&t.done||filter==="open"&&!t.done);
  if(!visible.length){const li=document.createElement("li");li.textContent="Selles vaates pole ülesandeid.";li.style.color="#777";list.append(li)}
  visible.forEach(t=>{
    const li=document.createElement("li");li.className="task"+(t.done?" done":"");
    const cb=document.createElement("input");cb.type="checkbox";cb.checked=t.done;cb.onchange=()=>{t.done=cb.checked;save();render()};
    const text=document.createElement("span");text.textContent=t.text;
    const del=document.createElement("button");del.className="delete";del.textContent="×";del.title="Kustuta";del.onclick=()=>{tasks=tasks.filter(x=>x.id!==t.id);save();render()};
    li.append(cb,text,del);list.append(li);
  });
  const done=tasks.filter(t=>t.done).length;
  stats.textContent=`${tasks.length} ülesannet · ${done} tehtud · ${tasks.length-done} tegemata`;
}
document.querySelector("#taskForm").onsubmit=e=>{e.preventDefault();const text=input.value.trim();if(!text)return;tasks.unshift({id:crypto.randomUUID(),text,done:false});input.value="";save();render()};
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;render()});
document.querySelector("#clearDone").onclick=()=>{tasks=tasks.filter(t=>!t.done);save();render()};
render();