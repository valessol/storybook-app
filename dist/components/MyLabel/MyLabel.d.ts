/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
