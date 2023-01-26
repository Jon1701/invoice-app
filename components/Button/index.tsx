import styled from 'styled-components';

/**
 * Shapes.
 */
export enum Shape {
  Rounded = 'rounded',
  Box = 'box',
}

/**
 * Color schemes.
 */
export enum ColorScheme {
  White = 'white',
  Purple = 'purple',
}

/**
 * Variants.
 */
export enum Variant {
  Solid = 'solid',
  Hollow = 'hollow',
}

export interface BorderRadiusCSS {
  borderRadius: string;
}

/**
 * Defines various border radius based on a provided shape.
 */
export const borderRadii = {
  [Shape.Rounded]: {
    borderRadius: '3px',
  } as BorderRadiusCSS,
  [Shape.Box]: {
    borderRadius: '0px',
  } as BorderRadiusCSS,
};

/**
 * CSS border-color, background-color, and color properties.
 */
export interface ColorSchemeCSS {
  borderColor: string;
  backgroundColor: string;
  color: string;
}

/**
 * Defines colours based on the colour scheme and variant.
 */
export const colorSchemes = {
  [ColorScheme.White]: {
    [Variant.Solid]: {
      borderColor: '#25273c',
      backgroundColor: '#fff',
      color: '#25273c',
    } as ColorSchemeCSS,
    [Variant.Hollow]: {
      borderColor: '#fff',
      backgroundColor: '#25273c',
      color: '#fff',
    } as ColorSchemeCSS,
  },
  [ColorScheme.Purple]: {
    [Variant.Solid]: {
      borderColor: '#fff',
      backgroundColor: '#7743db',
      color: '#fff',
    } as ColorSchemeCSS,
    [Variant.Hollow]: {
      borderColor: '#7743db',
      backgroundColor: '#25273c',
      color: '#fff',
    } as ColorSchemeCSS,
  },
};

/**
 * Base stylable button props.
 */
interface BaseButtonProps {
  disabled?: boolean;
  borderRadius: string;
  borderColor: string;
  backgroundColor: string;
  color: string;
  minWidth?: string;
  width?: string;
  aspectRatio?: string;
  padding?: string;
}

/**
 * Base stylable button.
 */
const BaseButton = styled.button<BaseButtonProps>`
  all: unset;
  display: inline-block;

  border-style: ${props => (props.disabled ? 'dashed' : 'solid')};
  border-width: 1.5px;
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};

  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  user-select: none;
  text-align: center;
  min-width: ${props => props.minWidth || '100px'};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  box-sizing: border-box;
  width: ${props => props.width || 'auto'};
  aspect-ratio: ${props => props.aspectRatio || 'auto'};

  padding: ${props => props.padding || '10px 15px'};
`;

/**
 * Button props.
 */
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * CSS class names.
   */
  className?: string;

  /**
   * Corner shape (box, rectangular).
   */
  shape: Shape;

  /**
   * Set of colours used.
   */
  colorScheme: ColorScheme;

  /**
   * Solid or hollow style.
   */
  variant: Variant;

  /**
   * Button contents.
   */
  children: React.ReactNode;

  /**
   * Indicates if the button is disabled.
   */
  disabled?: boolean;

  /**
   * Minimum width.
   */
  minWidth?: string;

  /**
   * Width.
   */
  width?: string;

  /**
   * Aspect ratio.
   */
  aspectRatio?: string;

  /**
   * Padding.
   */
  padding?: string;
}

/**
 * Button component.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  shape = Shape.Rounded,
  colorScheme = ColorScheme.White,
  variant = Variant.Solid,
  disabled = false,
  minWidth,
  width,
  aspectRatio,
  padding,
  children,
  ...rest
}) => {
  // Get the colour scheme.
  const { borderColor, backgroundColor, color } =
    colorSchemes[colorScheme][variant];

  // Get border radius.
  const { borderRadius } = borderRadii[shape];

  return (
    <BaseButton
      className={className}
      borderRadius={borderRadius}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      minWidth={minWidth}
      width={width}
      aspectRatio={aspectRatio}
      padding={padding}
      {...rest}>
      {children}
    </BaseButton>
  );
};
