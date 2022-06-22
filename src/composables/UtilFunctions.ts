import Repositories from "@/api/Repositories";
import { Dialog } from "quasar";

export const repositories = () => new Repositories();

export function $$dialog(message: string) {
    Dialog.create({
        message: message,
    });
}
