import { FlagComponent } from "country-flag-icons/react/3x2";
import React from "react";

type InputProps = {
  name: string;
  label_className?: string;
  required: boolean;
  input_className?: string;
};

export interface TextInputProps extends InputProps {
  type: "email" | "password" | "text";
  parent_div_className?: string;
  placeholder?: string;
  label: string;
}

export interface CheckboxProps extends InputProps {
  type: "checkbox";
  parent_div_className: string;
  input_div_className: string;
  label_div_className: string;
  label: React.ReactNode;
}

export interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
}
export interface Route {
    path: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface DashboardProps {
    children: React.ReactNode;
}


export interface ContentTitleProps {
    title: string;
    crumbs: string[];
}

export interface Order {
    id: number;
    order_num: number;
    type: string;
    status: "ordered" | "shipped" | "delivered";
    created_on: Date;
    pick_date: Date;
    price: string;
    from_node: string;
    receiving_node: string;
    category: "automatic" | "manual" | "electric" | "hydro-fueled";
}


export interface SearchState {
  searchItems: Array<number>;
}

export type APIData = {
  status: 1|0;
  data: Order[];
  message: string;
}
