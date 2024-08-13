# Suaweb

Suaweb is a JavaScript SDK that encapsulates the Suatokens HTTP API. It provides an easy-to-use interface for interacting with Suatokens, allowing developers to integrate Suatokens functionality into their applications.

## Installation

To install Suaweb, use npm:

```bash
npm install suaweb
```

## Usage

Here's a basic example of how to use Suaweb:

```javascript
import Suatokens from 'suaweb';

const suatokens = new Suatokens();

// Set custom node URL (optional)
suatokens.setNodeURL('http://localhost:8077/');

// Check balance
async function checkBalance() {
    const token = '8ea48650604a1997109f39e98eb75e78f42a16a0d83d00a736bdd75135539b05';
    const suacoin_address = '1G2FyHsZJpBY9EkY1wGqfmFjnKcz8hCmv8';
    const balance = await suatokens.getBalance(token, suacoin_address);
    console.log('Balance:', balance);
}

checkBalance();
```

## Features

- Create tokens
- Transfer tokens
- Mint tokens
- List tokens, mints, and transfers
- Get token balances
- Fetch transfer details
- List nodes
- Get average fees
- Get holders count
- Get block count

## API Reference
For detailed API documentation, please refer to the Suatokens API documentation.

## Development

To run tests:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Issues

If you encounter any issues or have feature requests, please file an issue on the GitHub issues page.

## Links

- GitHub Repository: https://github.com/suacoin/suaweb
- Suatokens Website: https://www.suatokens.com
