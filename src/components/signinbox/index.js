import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import {
  Signincontainer,
  Signwrap,
   Signstartcontainer,
  Signpagecontainer,
  Signpageheaderwrapper,
  Signpageheaderwrapperh,
  Signpageheaderlogo,
  Signpagemiddlewrapper,
  Signpagemiddlewrapperemaillabel,
  Signpagemiddlewrapperform,
  Input,
  Signpagemiddlewrapperlast,
  Signpagemiddlewrapperlastbutton,
  ButtonLink,
  Signpagemiddlewrapperlastfg,
  FgLink,
  Signpagemiddlewrapperlastp,
  Signlastcontainer,
  Signlastcontainerp,
  Signlastcontainerbutton,
  BtnLink,
} from "./signinelement";
const SigninPage = () => {
  return (
    <Signincontainer>
      <Signwrap>
        <Signstartcontainer>
          <h1>Treadaa</h1>
        </Signstartcontainer>
        <Signpagecontainer>
          <Signpageheaderwrapper>
            <Signpageheaderwrapperh>
              {" "}
              <h1> Sign-In </h1>
            </Signpageheaderwrapperh>

            <Signpageheaderlogo>
              <IconContext.Provider
                value={{ color: "blue", className: "global-class-name" }}
              >
                <BsBoxArrowInRight />
              </IconContext.Provider>
            </Signpageheaderlogo>
          </Signpageheaderwrapper>
          <Signpagemiddlewrapper>
            <Signpagemiddlewrapperform>
              <Signpagemiddlewrapperemaillabel>
                <label htmlFor="email">Email</label>
              </Signpagemiddlewrapperemaillabel>
              <Input
                type="text"
                size="49px"
                placeholder="treadaa@gmail.com"
                name="email"
              />
              <Signpagemiddlewrapperemaillabel>
                <label htmlFor="password">Password</label>
              </Signpagemiddlewrapperemaillabel>
              <Input
                type="text"
                size="49px"
                placeholder="treadaa@gmail.com"
                name="email"
              />
            </Signpagemiddlewrapperform>
            <Signpagemiddlewrapperlast>
              <Signpagemiddlewrapperlastbutton>
                <ButtonLink to="/signIn">continue</ButtonLink>
              </Signpagemiddlewrapperlastbutton>
              <Signpagemiddlewrapperlastfg>
                <FgLink to="/">Forget password?</FgLink>
              </Signpagemiddlewrapperlastfg>
            </Signpagemiddlewrapperlast>
            <Signpagemiddlewrapperlastp>
              By continuing, you agree to Treadaa's Conditions of Use and
              Privacy Notice.
            </Signpagemiddlewrapperlastp>
          </Signpagemiddlewrapper>
        </Signpagecontainer>
        <Signlastcontainer>
          <Signlastcontainerp>New To Treadaa</Signlastcontainerp>
          <Signlastcontainerbutton>
            <BtnLink to="/">Create my account</BtnLink>
          </Signlastcontainerbutton>
        </Signlastcontainer>
      </Signwrap>
    </Signincontainer>
  );
};

export default SigninPage;
