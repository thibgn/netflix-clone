import React from "react";
import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faq";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Films, TV programmes & more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere, cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email Address'></OptForm.Input>
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
