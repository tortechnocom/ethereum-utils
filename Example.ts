
import { PrivateKeyAccount } from 'viem'
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

// get triple 3 suffix
const generateWallet = (): PrivateKeyAccount | undefined => {
  const privateKey = generatePrivateKey()
  const account = privateKeyToAccount(privateKey)
  if ('9' === account.address.at(39).toLocaleLowerCase() && account.address.at(39) === account.address.at(40) && account.address.at(40) === account.address.at(41)) {
    console.log('privateKey: ', privateKey)
    console.log('account: ', account)
    return account
  }
  return
}
let accountSize = 0
while (accountSize < 10) {
  if (generateWallet()) {
    accountSize++
    console.log('accountSize...', accountSize)
  }
}