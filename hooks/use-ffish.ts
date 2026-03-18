import { useState, useEffect, useRef } from "react";
import { Module, FairyStockfish } from "ffish-es6";

export default function useFfish() {
    const [ffish, setFfish] = useState<FairyStockfish | null>(null);
    const ffishRef = useRef<FairyStockfish | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        const initializeFfish = async () => {
            try {
                setIsLoading(true);
                if (ffishRef.current) {
                    if (isMounted) {
                        setFfish(ffishRef.current);
                        setIsLoading(false);
                    }
                    return;
                }

                const loadedModule = await Module();
                ffishRef.current = loadedModule;
                
                if (isMounted) {
                    setFfish(loadedModule);
                    setIsLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err : new Error(String(err)));
                    setIsLoading(false);
                }
            }
        };

        initializeFfish();
    }, []);

    return {
        ffish,
        isLoading,
        error
    };
}