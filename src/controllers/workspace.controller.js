import workspaceMemberRepository from "../repository/workspace.repository.js";
import ServerError from "../helpers/error.helper.js";

class WorkspaceController {
    async getAllWorkspaces(request, response) {
        try {
            //cliente consultante
            const user = request.user
            const workspaces = await workspaceMemberRepository.getWorkspaceListByUserId(request.user.id);
            return response.status(200).json(
                {
                    ok: true,
                    status: 200,
                    data: workspaces
                }
            )
        }
        catch (error) {
            if (error instanceof ServerError) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                console.error('Error inesperado en el registro', error)
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: "Internal server error"
                    }
                )
            }
        }
    }
}

const workspaceController = new WorkspaceController()

export default workspaceController