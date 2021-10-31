/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';

const Home = () => {
  const history = useHistory();
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    history.push('/login');
  };

  const resourceServerExamples = [
    {
      label: 'Node/Express Resource Server Example',
      url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
    },
    {
      label: 'Java/Spring MVC Resource Server Example',
      url: 'https://github.com/okta/samples-java-spring/tree/master/resource-server',
    },
    {
      label: 'ASP.NET Core Resource Server Example',
      url: 'https://github.com/okta/samples-aspnetcore/tree/master/samples-aspnetcore-3x/resource-server',
    },
  ];

  if (authState.isPending) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>
        <Header as="h1">CC Clean Control System </Header>

        { authState.isAuthenticated && !userInfo
        && <div>Loading user information...</div>}

        {authState.isAuthenticated && userInfo
        && (
        <div>
          <p>
            Welcome, &nbsp;
            {userInfo.name}
            !
          </p>
          <p>
            You have successfully authenticated against your CC Account, and have been redirected back to this application.  You now have an ID token and access token in local storage.
            Visit the
            {' '}
            <a href="/profile">My Profile</a>
            {' '}
            page to take a look inside the ID token.
          </p>
          
          <ul>
            {resourceServerExamples.map((example) => <li key={example.url}><a href={example.url}>{example.label}</a></li>)}
          </ul>
          <p>
            Once you have downloaded and started the example resource server, you can visit the
            {' '}
            <a href="/messages">My Messages</a>
            {' '}
            page to see the authentication process in action.
          </p>
        </div>
        )}

        {!authState.isAuthenticated
        && (
        <div>
          <p>Welcome to the CC Clean Control System</p>
          <p>
           Please
          </p>
          <Button id="login-button" primary onClick={login}>Login</Button>
        </div>
        )}

      </div>
    </div>
  );
};
export default Home;
