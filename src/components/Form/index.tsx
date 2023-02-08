
import Button from "../Button"


export default function Form() {
    return (
        <form action="">
            <div>
                <label htmlFor="tarefa">Adicione uma tarefa</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required />
            </div>
            <div>
                <label htmlFor="">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="02:00:00"
                    required />
            </div>

            <Button />
        </form>
    )
}