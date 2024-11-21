import { AuthRootState } from "@/store";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthentificated = useSelector(
    (state: AuthRootState) => state.isAuthentificated,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentificated) {
      navigate("/auth", { replace: true });

      return;
    }
  }, [navigate, isAuthentificated]);

  return children;
}
