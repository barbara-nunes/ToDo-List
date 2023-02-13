import { RadioButton, Trash } from "phosphor-react";

import { useState } from "react";
import styles from './Tasks.module.css';

import icone from '../assets/Icone.svg';

export function Tasks(...props:any){

    function handleDeleteTask() {
     //   onDeleteTask(content);
    }
    const showList = props?.tasks?.length > 0
    return(
        showList ? 
        <div className={styles.list}>
            {props.tasks.map(task => {
                return (
                    <>
            <RadioButton className={styles.check}></RadioButton>
           <label>{task}</label>
           
            <Trash size={18} />
            </>
                )
            })}
            

        </div> :

        <div className={styles.infoBox}>
            <header className={styles.icone}>
                <img src={icone} alt="Icone Lista" />
            </header>

            <h1 className={styles.textOne}>
                Você ainda não tem tarefas cadastradas
            </h1>

                <h3 className={styles.textTwo}>
                   Crie tarefas e organize seus itens a fazer
                </h3>
        </div>
    )


  
}
