import styles from "@/styles/components/button.module.scss";

interface ButtonProps {
  str: string;
}

export const Button = ({ str }: ButtonProps) => {
  return <button className={`${styles["button"]}`}>{str}</button>;
};
