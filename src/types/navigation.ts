export type NavigationLink = {
  kind: "link";
  label: string;
  href: string;
};

export type NavigationGroup = {
  kind: "group";
  label: string;
  children: readonly NavigationLink[];
};

export type NavigationItem = NavigationLink | NavigationGroup;
