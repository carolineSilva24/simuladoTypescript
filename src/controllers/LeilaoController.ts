import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{

    constructor(){}

    async createleilao(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newusuario = await UsuarioService.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newusuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const users = UsuarioService.listUsuarios();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUsuarios(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUsuarios(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UsuarioController;