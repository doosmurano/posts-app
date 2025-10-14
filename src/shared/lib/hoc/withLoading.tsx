import { ComponentType } from "react";
import { LoadingState } from "@/types/api";
import { Error } from "@/shared/ui/Error/Error";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";

interface WithLoadingProps extends LoadingState {
    onRetry?: () => void;
}

export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>
): ComponentType<P & WithLoadingProps> {
    const WithLoadingComponent = (props: P & WithLoadingProps) => {
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
