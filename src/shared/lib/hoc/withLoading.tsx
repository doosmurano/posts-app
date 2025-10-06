import { FC, ComponentType } from "react";
import { Error } from "../../ui/Error/Error";
import { LoadingState } from "../../../types/api";
import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner";

interface WithLoadingProps extends LoadingState {
    onRetry?: () => void;
}

export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>
): ComponentType<P & WithLoadingProps> {
    const WithLoadingComponent: FC<P & WithLoadingProps> = (props) => {
        const { isLoading, isError, errorMessage, onRetry, ...rest } = props;

        if(isLoading) {
            return <LoadingSpinner />;
        }

        if(isError) {
            return <Error errorMessage={errorMessage} onRetry={onRetry} />;
        }
        return <WrappedComponent {...rest as P} />;
    }

    WithLoadingComponent.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithLoadingComponent;
}
