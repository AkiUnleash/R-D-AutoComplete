import { NextPage } from 'next'
import styled from 'styled-components';
import theme from 'src/utils/theme';

type TextProps = {
  type?: string;
  className?: string;
  placeholder: string;
  width?: string;
  borderRadius?: string;
  margin?: string;
  value?: string;
  labelName?: string;
  onChange?: any;
};

const StyledTextbox = styled.input<
  Pick<TextProps, 'width' | 'borderRadius' | 'margin'>
  >`
  appearance: none;
  border: solid 1px #000;
  outline: 0;
  color: ${theme.colorStandard.letter};
  font-size: 16px;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  &:focus {
    background-color: #fff9c4;
  }
`;

const StyledLabel = styled.label<
  Pick<TextProps, 'width' | 'borderRadius' | 'margin'>
  >`
  color: ${theme.colorStandard.accent};
  font-size: 16px;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`;

const StyledGroup = styled.div`
  display: flex;
  flex-flow: column;
`
/**
 * Textbox component.
 * @param className For reading external CSS.
 * @param placeholder Placeholder
 * @param width Width
 * @param borderRadius BorderRadius
 * @param margin Margin
 * @param value Value
 * @param onChange Handler when changeing data.
 * @param labelName Label name.
 * @param type Type(text / password)
 * @returns Components
 */
export const Textbox: NextPage<TextProps> = ({
  className,
  placeholder,
  width,
  borderRadius = "3px",
  margin = '0 0 0 0',
  value,
  onChange,
  labelName,
  type = "text"
}) => {
  if (labelName) {
    return (
      <StyledGroup>
        <StyledLabel>
          {labelName}
        </StyledLabel>
        <StyledTextbox
          type={type}
          className={className}
          placeholder={placeholder}
          width={width}
          borderRadius={borderRadius}
          margin={margin}
          value={value}
          onChange={onChange}
        />
      </StyledGroup>
    );
  } else {
    return (
      <StyledTextbox
        type="text"
        className={className}
        placeholder={placeholder}
        width={width}
        borderRadius={borderRadius}
        margin={margin}
        value={value}
        onChange={onChange}
      />
    )
  }
};