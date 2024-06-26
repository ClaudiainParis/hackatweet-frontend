import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { login } from '../reducers/users';
import 'antd/dist/antd.css';




function ModalTest(){


    const dispatch = useDispatch();
	// const users = useSelector((state) => state.users.value);


    // const [signInfirstname, setSignInfirstname] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
                console.log(data)
                // console.log(signInfirstname)
                console.log(signInUsername)
                console.log(signInPassword)
				if (!data.result) {
                    console.log('false')
                } else {
					dispatch(login({username: signInUsername}));
					setSignInUsername('');
					setSignInPassword('');
                }
                console.log('button signin clicked')
				}
			);
	}; 


    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setLoading(true);
      handleConnection();
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Sign In
        </Button>
        <Modal
          open={open}
          title="Connect to Hackatweet"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Submit
            </Button>,
           
          ]}
        >
          <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
          <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} /> /
        </Modal>
      </>
    );
  };

export default ModalTest;