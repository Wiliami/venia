import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { BellDot } from 'lucide-react'

export function Alert() {
   return (
        <AlertDialog>
            <AlertDialogTrigger>
                <BellDot className="bg-green-500 rounded" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualização: Campanha Y</AlertDialogTitle>
                <AlertDialogDescription>
                    A camanha que você criou recebeu uma nova atualização.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
                {/* <AlertDialogAction>Continuar</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
   )
}