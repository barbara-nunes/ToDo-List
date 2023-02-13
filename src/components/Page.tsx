import { PlusCircle, RadioButton, Trash } from 'phosphor-react'

import stylesPage from './Page.module.css';
import stylesTask from './Tasks.module.css';

import { FormEvent, useEffect, useState } from 'react';

import logo from '../assets/Logo.svg';
import pgPromise from 'pg-promise';
import icone from '../assets/Icone.svg';


export function Page() {
  const [newTaskText, setNewTaskText] = useState('')
  console.log(newTaskText);

  const [tasks, setTasks] = useState<string[]>([])

function handleCreateNewTask(event: FormEvent) {
  event.preventDefault()

  setTasks([...tasks, newTaskText]);
  setNewTaskText('');
}

function Logo() {
  return (
        <header className={stylesPage.logo} >
          <img src={logo} alt="Logotipo ToDo" />
        </header>
        
      );
}

function handleDeleteTask(taskToDelete:string) {
  console.log("teste")
  const activeTasks = tasks.filter((task) => task !== taskToDelete)
  setTasks(activeTasks)

}

  function Tasks(){
    const showList = tasks?.length > 0
    return(
        showList ? 
        <>
        
            {tasks.map(task => {
                return (
                  <div className={stylesTask.list}>

            {/* <RadioButton className={stylesTask.check}></RadioButton> */}

          
            <main className="wrapper">
              <section className="checkbox-wrapper">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label"></label>
              </section>
            </main>
         
           
            
            
           <label>{task}</label>
           
            <Trash onClick={() => handleDeleteTask(task)} size={18} />
            </div>
                )
            })}
            

       
        </> :

        <div className={stylesTask.infoBox}>
            <header className={stylesTask.icone}>
                <img src={icone} alt="Icone Lista" />
            </header>

            <h1 className={stylesTask.textOne}>
                Você ainda não tem tarefas cadastradas
            </h1>

                <h3 className={stylesTask.textTwo}>
                   Crie tarefas e organize seus itens a fazer
                </h3>
        </div>
    )
  }

 return(
<>
  <article className={stylesPage.wrapper}>
    <Logo/>
    
    <form onSubmit={handleCreateNewTask} className={stylesPage.taskForm}>
      <input 
      value={newTaskText} onChange={value => setNewTaskText(value.target.value)}
      className={stylesPage.textArea}
      name="Task"
      placeholder='Adicione uma nova tarefa'
      required
      />

      <button 
  
      className={stylesPage.button} type='submit'>
      Criar

      <PlusCircle />
      </button>
    </form>


    <div className={stylesPage.infos}>
        <strong className={stylesPage.task}>
          Tarefas Criadas 5
          </strong>
          
        <strong className={stylesPage.completedTasks}>
          Concluídas <p>6</p>
          </strong>

         

    </div>

    <hr className={stylesPage.line}/>

       
       
        
      
    

  </article>
    <Tasks/>
    </>
)}



