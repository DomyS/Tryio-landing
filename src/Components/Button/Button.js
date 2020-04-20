import React from "react";
import style from "./Button.module.css";
import classNames from "classnames";

const Button = ({
  buttonText,
  fontSize,
  background,
  border,
  padding,
  color,
  boxShadow,
  width,
  marginTop,
  withBackground,
  navBar,
  footer,
  withIcon,
  url,
}) => {
  const button = classNames({
    [style.button]: true,
    [style.withBackground]: withBackground,
    [style.navBar]: navBar,
    [style.footer]: footer,
  });

  return (
    <div style={{ marginTop: marginTop }}>
      <a
        className={button}
        style={{
          color: color,
          background: background,
          border: border,
          padding: padding,
          fontSize: fontSize,
          boxShadow: boxShadow,
          width: width,
        }}
        href={url}
      >
        {withIcon && (
          <span>
            <i class="fa fa-long-arrow-down"></i>
          </span>
        )}
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
