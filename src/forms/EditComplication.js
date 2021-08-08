----------------------------------------------------------------------------
renderReview = () => {
    if (document.querySelector(`#complication-li-${this.id}`)){
        return
    }
    const div = document.getElementById(`medication-${this.medication_id}`)
    const li = document.createElement("li")
    li.id = `complication-li-${this.id}`
    div.dataset.medId = this.medication_id
    div.dataset.id = this.id
    li.innerHTML = `
        Description: <span class="complication-description">${this.complication_description}</span><br>
        <br>Severity (1-10): <strong class="complication-severity">${this.complication_severity}</strong><br>
        Duration: <span class="complication-duration">${this.complication_duration}</span><br>
        Completely Resolved (Yes or No): <span class="completely_resolved">${this.completely_resolved}</span><br>
    `
    if(localStorage.getItem("user_id") == this.user_id) {
        li.innerHTML += `<button class="edit-complication" data-id="${this.id}">Edit</button>
        <button class="delete-complication" data-id="${this.id}">Delete</button><br>`
    }
li.innerHTML += '<hr>'
    div.appendChild(li)
    if(localStorage.getItem("user_id") == this.user_id) {
        document.querySelector(`button.delete-complication[data-id='${this.id}']`).addEventListener("click", ReviewApi.handleDelete)
       document.querySelector(`button.edit-complication[data-id='${this.id}']`).addEventListener("click", this.handleUpdate)
    }
    
}


handleCreateComplication = (renderReviews) => {
    ul().children.length < 1 ? handleClick() : renderComplication(complication, complication.medication.id)
    complicationForm().reset()
}

handleUpdate = (e) => {
    if (e.target.innerText === "Edit") {
        const compId = e.target.dataset.id
        const complicationDescription = e.target.parentElement.querySelector("#complication-description").innerText
        const complicationSeverity = e.target.parentElement.querySelector("#complication-severity").innerText
        const complicationDuration = e.target.parentElement.querySelector("#complication-duration").innerText
        const completelyResolved = e.target.parentElement.querySelector("#completely-resolved").innerText
         
        e.target.parentElement.innerHTML = `
            <label for="complicationDescription">Description:</label>
            <input type="text" name="complicationDescription" id="complicationDescription" value="${complicationDescription}"><br>
            <label for="complication-severity">Severity (1-10):</label>
            <input type="number" name="complicationSeverity" id="complication-severity" value="${complicationSeverity}"><br>
            <label for="complication-duration">Doctor's Office Rating (1-10):</label>
            <input type="text" name="complicationDuration" id="complication-duration" value="${complicationDuration}"><br>
            <label for="completely-resolved">Comments Regarding This Doctor's Office:</label>
            <input type="boolean" name="completelyResolved" id="completely-resolved" value="${completelyResolved}"><br>
            <button class="update-complication" data-id="${compId}">Update</button>
            <button class="delete-complication" data-id="${compId}">Delete</button>
       `
            document.querySelector(`button.delete-complication[data-id='${compId}']`).addEventListener("click", ReviewApi.handleDelete)
            document.querySelector(`button.update-complication[data-id='${compId}']`).addEventListener("click", this.handleUpdate)
       


    } else {
        ReviewApi.handleFetchUpdate(e)
    }
}


replaceElement = (li) => {
     
    li.innerHTML = `
    Description: <strong id="complicationDescription">${this.complication_description}</strong><br>
    Severity (1-10): <span id="complicationSeverity">${this.complication_severity}</span><br>
    Duration: <span id="complicationDuration">${this.complication_duration}</span><br>
    Completely Resolved (Yes or No): <span class="completelyResolved">${this.completely_resolved}</span><br>
        <button class="edit-complication" data-id="${this.id}">Edit</button>
        <button class="delete-complication" data-id="${this.id}">Delete</button>
    `
       document.querySelector(`button.delete-complication[data-id='${this.id}']`).addEventListener("click", ReviewApi.handleDelete)
       document.querySelector(`button.edit-complication[data-id='${this.id}']`).addEventListener("click", this.handleUpdate)
    
}
}

 