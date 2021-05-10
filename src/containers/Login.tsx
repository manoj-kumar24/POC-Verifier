import React, { FC, useState } from "react";
import { useAuthentication } from "./Authentication";
import { Button, Form, FormControl } from "react-bootstrap";
import config from '../config';

const Login: FC = () => {
  const { loading, login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MjA1MDk0NjUzNjIsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiYzYxOWM3MTg0NzBhZmUxYiIsImlzcyI6ImRpZDplbGVtOkVpQ2hMM1lwZUZubmo3bzYwSHp5ZWVZWmdQTmtwZG9oR2Q4TW5uRTlXbEpZUmc7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZVZwVVFUVmFSR3hzV2xkR2JVOVVhelZaYWtFMVQxZEthMDVFWkd4T1YxVTFXbFJCTVU1RVVtbGFWR2Q1VFdwb2JFMUVZM2xQUkdzelRVUm5NazlVUVhkTmJWSnFUMWRTYVZwRWF6RmFWRVV3VG5wV2FrOVRTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUWHBLYUU5VVVteGFiVTAxV1dwak1FMUVhR3RQUkZVeldUSkthRTlFVG10UFIxSnJUakpHYWs1SFRtbE5WMGswVFVSRk1scHRWWGRhYW1kNFRrUm9hMDVxVFRWT1ZGRTFXVmRLYUU1cWFHbGFSRmw2VFRKVmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lZbFY0TlV3d1ZEQnJiVE5wU1dwRFNqSm5SVUpPVlRkaVZXcHBOM0JHV1hWNE5WZENOVkI0UW5kWU1HOUJWUzEzV2twTmNuaFdja2hDUkZZNVN6Sm5NM053ZFhWcFVVOXZNME5KWjIweWQwa3RZMUpoYldjaWZRI3ByaW1hcnkifQ.ca4d734ef0ee5fd8d3284635919be9bf66ce5a0553378e327fc4de621a48b24b0101ab19e6b72fbb56fbe434d1666768b84e1f7411b0054f7a965112de949877');

  async function onLogin() {
    try {
      await login.fromLoginAndPassword(username, password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='Login'>
      <div className='Form'>
        <h1 className='Title'>Verifier Login</h1>
        <p className='Info'>
          Login in order to continue
        </p>

        <Form style={{ width: 280 }}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button block disabled={loading} onClick={onLogin}>
            Login
          </Button>

         <p> Looking to rent for a vehicle for your trip? Share your driving license credentials <a href={config.wallet_url + '/share-credentials?token=' + shareCredRequestToken} target='_blank' rel="noopener noreferrer">here!</a></p>
        </Form>
      </div>
    </div>
    
  );
};

export default Login;
