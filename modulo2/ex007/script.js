const nomeCompleto = window.prompt('Qual o seu nome completo?');

    window.document.body.innerHTML += `Seu nome completo é: <strong>${nomeCompleto}</strong><br>`;

    window.document.body.innerHTML += `Seu nome tem <strong>${nomeCompleto.length}</strong> letras</br>`;

    window.document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nomeCompleto.charAt(1)}</strong></br>`;

    window.document.body.innerHTML += `Qual o primeiro índice <strong>p</strong> seu nome? ${nomeCompleto.indexOf('p')}</br>`;

    window.document.body.innerHTML += `Qual o ultimo índice <strong>f</strong> do seu nome? <strong>${nomeCompleto.lastIndexOf('f')}</strong></br>`;

    window.document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nomeCompleto.slice(-3)}</strong></br>`;

    window.document.body.innerHTML += `As palavras do seu nome são: <strong>${nomeCompleto.split(' ')}</strong>.</br>`;

    window.document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeCompleto.toUpperCase()}</strong></br>`;

    window.document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nomeCompleto.toLowerCase()}</strong>`