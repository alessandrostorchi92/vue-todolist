// Consegna:
// Rifare l’esercizio della to do lisa.Questa volta però ogni todo sarà un oggetto, formato da tre proprietà:
// id, un numero progressivo per indicare in modo univoco l’elemento
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no 

// MILESTONE 0: Creare un array con dei dati di partenza;
// MILESTONE 1: Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato;
// MILESTONE 2: Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista;
// MILESTONE 3: Predisporre un campo di input testuale e un pulsante “aggiungi”, cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

"use script"

Vue.createApp({

    data() {
        return {
            toDoList: [
                {
                    id: 101,
                    text: "Fai la spesa",
                    done: false
                }, {
                    id: 102,
                    text: "Porta fuori il cane",
                    done: false
                }, {
                    id: 103,
                    text: "Vai in palestra",
                    done: false
                }, {
                    id: 104,
                    text: "Chiama mamma",
                    done: false
                }
            ],
            newTask: ""
        }
    },
    methods: {
        changeDoneValue(i) {
            const newToDoList = [...this.toDoList]

            newToDoList[i].done = !this.toDoList[i].done
            return
        },
        deleteToDoItem(itemToDeleteId) {
            const newToDoList = []

            for (let i = 0; i < this.toDoList.length; i++) {
                if (this.toDoList[i].id !== itemToDeleteId) {
                    newToDoList.push(this.toDoList[i])
                }
            }

            this.toDoList = [...newToDoList]
            return
        },
        addNewTask() {
            let newItemId = 100;

            if (this.toDoList.length !== 0) {
                newItemId = this.toDoList[this.toDoList.length - 1].id + 1
            }

            const newToDoItem = {
                id: newItemId,
                text: this.newTask,
                done: false
            }

            this.toDoList.push(newToDoItem)

            this.newTask = ""
            return
        }
    }
}).mount('#app')