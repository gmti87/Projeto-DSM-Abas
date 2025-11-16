document.getElementById("busca").value = "";
document.getElementById("busca-data").value = "";

let tasks = [];

// Converte data de 'DD/MM/AAAA' para 'AAAA-MM-DD'
function converterDataParaISO(dataBR) {
    const [dia, mes, ano] = dataBR.split('/');
    return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
}

async function buscarTasks() {
    try {
        const resposta = await fetch('temadb.json');
        tasks = await resposta.json();
        exibirTasks(tasks);
    } catch (erro) {
        console.log("Erro ao carregar tarefas:", erro);
    }
}

function exibirTasks(lista) {
    const tbody = document.querySelector("#tabela-tasks tbody");
    tbody.innerHTML = ""; // limpa antes de preencher

    lista.forEach(task => {
        const situation = task["tarefa-agendada"] && task["hora-tarefa"]
            ? "Tarefa Agendada para"
            : "Tarefa Criada";

        const tr = document.createElement("tr");
        tr.innerHTML = `
                            <td>
                            <input type="checkbox" data-id="${task.id}" />
                            </td>
                            <td>${task["data-tarefa"]}</td>
                            <td>${task["tarefa"]}</td>
                            <td>${task["situacao"]}</td>
                            <td>${task["tarefa-agendada"] || "-"}</td>
                            <td>${task["hora-tarefa"] || "-"}</td>
                            <td>
                                <button class="btnSave">Salvar</button>
                                <button class="btnCancel">Cancelar</button>
                                <button class="btnEdit">Editar</button>
                            </td>
                            `;
        tbody.appendChild(tr);
    });
}

function filtrarTasksTextoData() {
    const texto = document.getElementById("busca").value.toLowerCase();
    const dataSelecionada = document.getElementById("busca-data").value;

    const filtradas = tasks.filter(task => {
        const tarefa = task["tarefa"]?.toLowerCase() || "";
        const dataTarefa = task["data-tarefa"] ? converterDataParaISO(task["data-tarefa"]) : "";

        const correspondeTexto = texto === "" || tarefa.includes(texto);
        const correspondeData = dataSelecionada === "" || dataTarefa === dataSelecionada;

        //return correspondeTexto || correspondeData;
        if (texto && dataSelecionada) {
            return tarefa.includes(texto) && dataTarefa === dataSelecionada;
        } else if (texto) {
            return tarefa.includes(texto);
        } else if (dataSelecionada) {
            return dataTarefa === dataSelecionada;
        } else {
            return true; // Nenhum filtro → mostra tudo
        }
    });

    exibirTasks(filtradas);
}

window.onload = function () {
    buscarTasks();
    document.getElementById("busca").addEventListener("input", filtrarTasksTextoData);
    document.getElementById("busca-data").addEventListener("input", filtrarTasksTextoData);
};