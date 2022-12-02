import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Texto a mostrar en el label
   */
  label: string;
  /**
   * Tamaño por defecto del label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Define si el texto es capitalizado
   */
  allCaps?: boolean;
  /**
   * Color del texto definido
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color del texto personalizado
   */
  fontColor?: string;
}

/**
 * MyLabel UI component for user interaction
 */
const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor || "" }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
