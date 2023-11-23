// CLP - Lógico Programável
let opcao = 0;
let motor = 1;
let lvd = "desligada";
let lvm = "ligada";
let estadoMotor = "parado";


function clp() {
    opcao = parseInt(prompt("Digite sua opção:"));

    do {

        switch (opcao) {
            case 1: 
                if (estadoMotor === "parado") {
                    motor = 1;
                    lvd = "ligada"
                    lvm = "desligada"
                    estadoMotor = "sentidoHorario";
                    document.getElementById("saida").innerHTML = `Motor: ${estadoMotor}`;
                } else {
                    document.getElementById("saida").innerHTML = `Alerta: Motor ligado - Para ligar na posição inversa o motor deve estar desligado`
                }
                break;

                case 2:
                    if (motor === 1) {

                    motor = 0;
                    lvd = "desligada"
                    lvm = "ligada"
                    estadoMotor = "parado";
                    document.getElementById("saida").innerHTML = `Motor: ${estadoMotor}`;
                        
                    } else {
                        document.getElementById("saida").innerHTML = `MOTOR: ${estadoMotor} - PODE REINICIAR O SISTEMA COM SEGURANÇA!`
                    }

            case 3: {
                if  (estadoMotor === "parado" && motor !== 0) {
                    motor = 1;
                    lvd = "ligada"
                    lvm = "desligada"
                    estadoMotor = "sentidoHorario";
                    document.getElementById("saida").innerHTML = `Motor: ${estadoMotor}`;
                } else {
                    document.getElementById("saida").innerHTML = `Alerta: Motor ligado - Para ligar na posição inversa o motor deve estar desligado`
                }
                break;
            
            }
            default:
                alert("Você digitou uma opção inválida! Digite a opção correta!");
                exit();
                break;
        }

    } while (opcao < 1 || opcao > 3 && motor !== 1)
}