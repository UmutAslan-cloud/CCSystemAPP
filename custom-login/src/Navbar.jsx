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
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const history = useHistory();
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => history.push('/login');
  const logout = async () => oktaAuth.signOut();

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src="https://camo.githubusercontent.com/dc06135f4f5c85810a0ab586bafabb269b1472fd615ed698020a3808b047d9a5/68747470733a2f2f6172617361746173617967696e2e6769746875622e696f2f6f70656e6c6f676f732f6c6f676f732f726563757273652d6f2e6a7067" />
            &nbsp;
            <Link to="/">CC Clean Control System</Link>
          </Menu.Item>
          {authState.isAuthenticated && (
          <Menu.Item id="messages-button">
            <Icon name="mail outline" />
            <Link to="/messages">Messages</Link>
          </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="board-button">
              <Link to="/board">Board</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && <Menu.Item id="logout-button" onClick={logout}>Logout</Menu.Item>}
          {!authState.isPending && !authState.isAuthenticated && <Menu.Item onClick={login}>Login</Menu.Item>}
          {!authState.isPending && !authState.isAuthenticated && <Menu.Item onClick={login}>About</Menu.Item>}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;
