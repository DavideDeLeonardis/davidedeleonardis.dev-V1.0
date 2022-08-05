import { useEffect, useState } from "react";

const useFetch = (applyData, url, token = "", method = "GET") => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchGH = async () => {
         setIsLoading(true);
         setError(null);

         try {
            const response = await fetch(url, {
               method: method,
               headers: {
                  Authorization: token,
               },
            });

            if (!response.ok) {
               throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
         } catch (error) {
            setError(error || "Something went wrong");
         }
			
         setIsLoading(false);
      };

      fetchGH();
   }, [applyData, url, method, token]);

   return {
      isLoading,
      error,
   };
};

export default useFetch;
