import MainNavigation from './MainNavigation';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns The overall layout of the application.
 */
export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}
