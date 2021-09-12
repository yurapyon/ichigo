import type { NextPage } from "next";
import React, { useState } from "react";

const defaultSettings = {
  a: false,
  b: true,
  c: false,
  num1: 10,
  num2: 0,
};

const Button: React.FC = (props) => {
  return (
    <>
      <input type="checkbox" onChange={props.onChange} checked={props.value} />
      {props.value ? props.name.toUpperCase() : props.name}
    </>
  );
};

const Slider: React.FC = (props) => {
  return (
    <>
      <input type="number" onChange={props.onChange} value={props.value} />
      {props.value}
    </>
  );
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: { ...defaultSettings },
    };
  }

  handleChange(val, name) {
    var s = { ...this.state.settings };
    s[name] = val;
    this.setState({ settings: s });
  }

  renderSlider(name) {
    return (
      <Slider
        name={name}
        value={this.state.settings[name]}
        onChange={(e) => this.handleChange(e.target.value, name)}
      />
    );
  }

  renderButton(name) {
    return (
      <Button
        name={name}
        value={this.state.settings[name]}
        onChange={(e) => {
          console.log(e);
          this.handleChange(e.target.checked, name);
        }}
      />
    );
  }

  submit() {
    console.log("submitting: ", this.state.settings);
  }

  render() {
    return (
      <>
        <p> {this.renderButton("a")} </p>
        <p> {this.renderButton("b")} </p>
        <p> {this.renderButton("c")} </p>
        <p> {this.renderSlider("num1")} </p>
        <p> {this.renderSlider("num2")} </p>
        <p>
          {" "}
          <input
            type="button"
            value="submit"
            onClick={() => this.submit()}
          />{" "}
        </p>
      </>
    );
  }
}

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  // find settings by user
  const settings = await prisma.settings.findUnique({
  });
  return { props: { settings } };
}
*/

export default Settings;
