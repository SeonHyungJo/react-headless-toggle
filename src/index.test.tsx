import React from "react";
import {fireEvent, getByText, render} from "@testing-library/react";
import '@testing-library/jest-dom'

import Toggle from './index'

function setUp() {
  return render(
    <Toggle>{({on, toggle, setOn, setOff}) => (
      <section>
        <section>
          <button onClick={toggle}>{'toggle button'}</button>
          <button onClick={setOn}>{'setOn button'}</button>
          <button onClick={setOff}>{'setOff button'}</button>
        </section>
        <section>{on ? 'Toggled On' : 'Toggled Off'}</section>
      </section>
    )}</Toggle>
  );
}

describe('Default Value Test', () => {
  it("Check Render Default", () => {
    const {getByText} = setUp();
    expect(getByText('Toggled Off')).toBeInTheDocument();
  });

  it("Check Toggle default value is True", () => {
    const {getByText} = setUp();
    const rendered = getByText('Toggled Off')

    expect(rendered).toHaveTextContent('Toggled Off');
  });

  it("Check defaultValue props change", () => {
    const {getByText} = render(
      <Toggle defaultValue={true}>{({on}) => (
        <section>{on ? 'Toggled On' : 'Toggled Off'}</section>
      )}
      </Toggle>
    );

    expect(getByText('Toggled On')).toBeInTheDocument();
  });

  it("Check onToggle action", () => {
    const onToggle = jest.fn();
    const {getByText} = render(
      <Toggle onToggle={onToggle}>{({on, toggle}) => (
        <section>
          <button onClick={toggle}>{'toggle button'}</button>
          <section>{on ? 'Toggled On' : 'Toggled Off'}</section>
        </section>
      )}
      </Toggle>
    );

    const button = getByText("toggle button");
    fireEvent.click(button);

    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toBeCalledWith(false);
  });
})

describe('Children Props Test', () => {
  it("Props onToggle Test", () => {
    const {getByText} = setUp();

    const toggleBtn = getByText("toggle button");

    expect(getByText('Toggled Off')).toBeInTheDocument();

    // Click toggle Button
    fireEvent.click(toggleBtn);
    expect(getByText('Toggled On')).toBeInTheDocument();
  });

  it("Props setOn Test", () => {
    const {getByText} = setUp();

    const setOnBtn = getByText("setOn button");

    expect(getByText('Toggled Off')).toBeInTheDocument();

    // Click setOn Button
    fireEvent.click(setOnBtn);
    expect(getByText('Toggled On')).toBeInTheDocument();
  });

  it("Props setOff Test", () => {
    const {getByText} = setUp();

    const setOffBtn = getByText("setOff button");

    expect(getByText('Toggled Off')).toBeInTheDocument();

    // Click setOff Button
    fireEvent.click(setOffBtn);
    expect(getByText('Toggled Off')).toBeInTheDocument();
  });
})
