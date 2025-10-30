function openPopup() {
            let title = document.getElementById("titleInput").value;
            let author = document.getElementById("authorInput").value;
            
                if (title === "" || author === "") {
                    alert("Please fill in both fields.");
                    return;
                }
            
            let c=document.createElement("li");
            c.innerHTML = `Title: ${title}, Author: ${author}`;
            document.getElementById("list5").appendChild(c);

      
            let del=document.createElement("button")
            del.textContent="Delete"
            del.onclick = () => c.remove();
            c.appendChild(del)
            popup.classList.add("open-popup");
            
            document.getElementById("titleInput").value="";
            document.getElementById("authorInput").value="";
    }
  function closePopup(){
    popup.classList.remove("open-popup");
  }
  