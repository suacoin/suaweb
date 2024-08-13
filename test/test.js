import Suatokens from 'suaweb';

const suatokens = new Suatokens();

// Check balance
async function checkBalance() {

    const token = '8ea48650604a1997109f39e98eb75e78f42a16a0d83d00a736bdd75135539b05';
    const suacoin_address = '1G2FyHsZJpBY9EkY1wGqfmFjnKcz8hCmv8';

    const balance = await suatokens.getBalance(token, suacoin_address);

    console.log('Balance:', balance);

}

checkBalance();
