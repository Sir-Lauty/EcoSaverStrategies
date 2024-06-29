import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const ProyectoFigura = ({ nombre = '-' }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const ProyectoInformacion = {
        DoctorStock: {
            nombreProyecto: 'Doctor Stock',
            slogan: 'Sencillo gestor de stock, para todos',
            infoResumida: 'Es un programa de control de stock el cual almacena los elementos que se agreguen, ya sea de una empresa, supermercado, farmacia, etc.',
            tecnologias: 'Python y MongoDB'
        },
        SensArInclusive: {
            nombreProyecto: 'SensAr Inclusive',
            slogan: 'Una alarma para todos',
            infoResumida: 'Es un sistema de seguridad sencillo, para que todas las personas logren entenderlo. Para que las personas con ciertas discapacidades (visuales, auditivas, intelectuales, entre otras) puedan comprender su uso.',
            tecnologias: 'Arduino'
        }
    };

    const info = ProyectoInformacion[nombre];
    const srcImg = '../../img/proyectos/' + nombre + '.png';

  return (
    <div className="flex flex-col relative shadow-medium rounded-xl">
        <div className="pb-4 overflow-visible w-96">
            <img alt= { nombre } className="object-cover rounded-xl" src= { srcImg }/>
        </div>
        <div className="pl-4 flex-col items-start">
            <h4 className="font-bold text-large">{info.nombreProyecto}</h4>
            <p className="text-tiny uppercase font-bold">{info.slogan}</p>
        </div>
        <div className="pt-4 pb-4 grid justify-center">
            <Button onPress={onOpen} className="py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300">Saber más</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{info.nombreProyecto}</ModalHeader>
                    <ModalBody>
                        <p>{info.infoResumida}</p>
                        <h4>Tecnologías utilizadas:</h4>
                        <p>{info.tecnologias}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="bg-red-500 hover:bg-red-400 text-white" onPress={onClose}>
                        Cerrar
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    </div>
  );
}

export default ProyectoFigura
