import { Component, PropsWithChildren } from 'react';
import { Button } from 'primereact/button';

import classes from './ErrorBoundary.module.scss';
import { SharedClassNameEnum } from '../../uikit/main/styles/SharedClassNameEnum.ts';

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

function onBack() {
  window.history.back();
}

export class ErrorBoundary extends Component<PropsWithChildren, IErrorBoundaryState> {
  static getDerivedStateFromError(error: Error): Partial<IErrorBoundaryState> {
    return { hasError: true, error };
  }

  constructor(props: {}) {
    super(props);
    this.clearError = this.clearError.bind(this);
  }

  state: IErrorBoundaryState = {
    hasError: false,
  };

  componentDidMount(): void {
    window.addEventListener('popstate', this.clearError);
  }

  componentWillUnmount(): void {
    window.removeEventListener('popstate', this.clearError);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className={classes.page}>
          <div className={classes.container}>
            <div className={classes.section}>
              <h1>Something went wrong...</h1>
            </div>
            <div className={classes.Section}>
              <div className={SharedClassNameEnum.TEXT_20_REGULAR}>Try going back and repeating the action</div>
              <div className={classes.buttonWrapper}>
                <Button link onClick={onBack}>
                  Go back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { children } = this.props;

    return children;
  }

  clearError() {
    this.setState({ hasError: false });
  }
}
