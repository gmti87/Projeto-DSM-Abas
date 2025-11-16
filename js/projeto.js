const ci = document.getElementById("checkInput");
const di = document.getElementById("dateInput");
const ti = document.getElementById("timeInput");

// se agendar não tiver marcado não tem essas opções
document.getElementById("dateInput").disabled = true;
document.getElementById("timeInput").disabled = true;

ci.addEventListener('input', function () {
    if (ci.checked) {
        di.disabled = false;
        ti.disabled = false;
    }
    else {
        di.disabled = true;
        ti.disabled = true;
    }
})

function salvarTask() {

    if (ci.checked) {
        // alert("teste");

        if (!di.value || !ti.value) {
            alert("Preencha a data e hora para agendar a tarefa");
            return;
        }

        const agora = new Date();
        const ano = agora.getFullYear();
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const dia = String(agora.getDate()).padStart(2, '0');

        const dataAgendadaStr = `${di.value}T${ti.value}`;
        const dataAgendada = new Date(dataAgendadaStr);

        if (dataAgendada <= agora) {
            alert("Data e hora devem ser maiores que a data e hora atual!");

            di.focus();
        }

        else if (dataAgendada > agora) {
            // criar os campos para inserir na tag p

            const p = document.getElementById("all-tasks");

            // cria o checkbox

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add = 'all-tasks-cb';

            // data criação tarefa

            const agora = new Date();
            const ano = agora.getFullYear();
            const mes = String(agora.getMonth() + 1).padStart(2, '0');
            const dia = String(agora.getDate()).padStart(2, '0');

            const dataFormatada = `${ano}-${mes}-${dia}`;

            const dataTask = document.createElement('input');
            dataTask.type = 'date';
            dataTask.id = 'all-tasks-dt';

            dataTask.value = dataFormatada;
            dataTask.readOnly = true;

            // tarefa

            const inputTask = document.createElement('input');
            inputTask.type = 'input';
            inputTask.id = 'all-tasks-it';
            inputTask.readOnly = true;

            const it = document.getElementById('taskInput').value;
            inputTask.value = it;

            // tarefa agendada
            const inputSchT = document.createElement('input');
            inputSchT.type = 'input';
            inputSchT.id = 'all-tasks-ischt';

            inputSchT.value = "Tarefa Agendada para";
            inputSchT.readOnly = true;

            const inputDataSch = document.createElement('input');
            inputDataSch.type = 'date';
            inputDataSch.id = 'all-tasks-itsch';

            inputDataSch.value = di.value;
            inputDataSch.readOnly = true;

            inputDataSch.classList.add('data-agendada');

            // hora
            const inputThour = document.createElement('input');
            inputThour.type = 'time';
            inputThour.id = 'all-tasks-ith';

            inputThour.value = ti.value;
            inputThour.readOnly = true;

            inputThour.classList.add('hora-agendada');

            // // botão editar
            const btnEdit = document.createElement('button');
            btnEdit.textContent = 'Editar';
            btnEdit.id = 'all-tasks-btnEdit';

            // botão salvar
            const btnSave = document.createElement('button');
            btnSave.textContent = 'Salvar';
            btnSave.id = 'all-tasks-btnSave';

            // botão cancelar
            const btnCancel = document.createElement('button');
            btnCancel.textContent = 'Cancelar';
            btnCancel.id = 'all-tasks-btnCancel';

            // quebra de linha
            const quebra = document.createElement('br');

            // Colocando os campos na tela
            p.appendChild(checkbox);

            p.appendChild(dataTask);

            // tarefa 
            p.appendChild(inputTask);

            // Agendada para 
            p.appendChild(inputSchT);
            p.appendChild(inputDataSch);

            // Hora
            p.appendChild(inputThour);

            p.appendChild(btnEdit);

            p.appendChild(btnSave);

            p.appendChild(btnCancel);

            p.appendChild(quebra);

            // Limpando os campos

            document.getElementById("taskInput").value = "";

            ci.checked = false;
            di.value = "";
            ti.value = "";

            di.disabled = true;
            ti.disabled = true;

            document.getElementById("taskInput").focus();
        }
    }

    else {
        const p = document.getElementById("all-tasks");

        // cria o checkbox

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'all-tasks-cb';

        // data criação tarefa

        const agora = new Date();
        const ano = agora.getFullYear();
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const dia = String(agora.getDate()).padStart(2, '0');

        const dataFormatada = `${ano}-${mes}-${dia}`;

        const dataTask = document.createElement('input');
        dataTask.type = 'date';
        dataTask.id = 'all-tasks-dt';

        dataTask.value = dataFormatada;
        dataTask.readOnly = true;

        // tarefa

        const inputTask = document.createElement('input');
        inputTask.type = 'input'
        inputTask.id = 'all-tasks-it';
        inputTask.readOnly = true;

        const it = document.getElementById('taskInput').value;
        inputTask.value = it;

        // tarefa criada

        const lbltasksc = document.createElement('input');
        lbltasksc.value = 'Tarefa Criada';
        lbltasksc.id = 'all-tasks-sc';
        lbltasksc.readOnly = true;

        // botão editar
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Editar';
        btnEdit.id = 'all-tasks-btnEdit';

        // botão salvar
        const btnSave = document.createElement('button');
        btnSave.textContent = 'Salvar';
        btnSave.id = 'all-tasks-btnSave';

        // botão cancelar
        const btnCancel = document.createElement('button');
        btnCancel.textContent = 'Cancelar';
        btnCancel.id = 'all-tasks-btnCancel';

        // quebra de linha
        const quebra = document.createElement('br');

        // adiciona os elementos
        p.appendChild(checkbox);

        // Data Atual
        p.appendChild(dataTask);

        // Tarefa
        p.appendChild(inputTask);

        // Tarefa criada
        p.appendChild(lbltasksc);

        // Botões
        p.appendChild(btnEdit);
        p.appendChild(btnSave);
        p.appendChild(btnCancel);

        // Quebra de linha
        p.appendChild(quebra);

        // Limpa campo
        document.getElementById("taskInput").value = "";
        document.getElementById("taskInput").focus();
    }
}

function cancelaTask() {
    // alert("cancelando...");
    document.getElementById("taskInput").value = "";
    document.getElementById("taskInput").focus();
}

function verificarTarefasAG() {
    const tarefas = document.getElementById("all-tasks");

    const datas = document.querySelectorAll('.data-agendada');
    const horas = document.querySelectorAll('.hora-agendada');

    const agora = new Date();

    for (let i = 0; i < datas.length; i++) {
        const data = datas[i].value; // formato YYYY-MM-DD
        const [ano, mes, dia] = data.split('-');
        const hora = horas[i].value; // formato HH:MM

        const dataHoraStr = `${data}T${hora}`;
        const dataHora = new Date(dataHoraStr);

        if (!datas[i].dataset.alertado && dataHora <= agora) {
            //alert(`A tarefa agendada para ${data} às ${hora} chegou!`);
            alert(`A tarefa agendada para ${dia}/${mes}/${ano} às ${hora} chegou!`);

            // Marca como alertado para não disparar novamente
            datas[i].dataset.alertado = 'true';

            // Opcional: muda o estilo
            //datas[i].style.border = '2px solid red';
            //horas[i].style.border = '2px solid red';
        }
    }

}

// Verifica a cada 30 segundos
setInterval(verificarTarefasAG, 5000);

// const meucb = document.getElementById("all-tasks-cb");

// function testacb() {
//     if (meucb.checked) {
//         alert("boho");
//     }
// }

// setInterval(testacb, 5000);