<div class="container poppins" style="max-height:90vh; overflow-y:scroll;">
    <div class="top-detalles mt-5">
        <div class="row">
            <h3 class="text-center mt-1 titulo-detalle">Editar Vehículo</h3>
        </div>
    </div>
    <div class="form-row m-4 poppins vh-edit">
        <div class="form-group col-12 mb-3">
            <label for="tipo">Tipo de vehiculo:</label>
            <select readonly  class="form-control" id="tipo">
                <option value="1">Moto</option>
                <option value="2">Carro</option>
            </select>
        </div>
        <div class="form-group col-12 mb-3">
            <label for="modelo">Modelo del vehículo</label>
            <input type="text" class="form-control" id="modelo" readonly="" value="Italika">
        </div>
        <div class="form-group col-12 mb-3">
            <label for="modelo">Color</label>
            <input type="text" class="form-control" id="modelo" readonly="" value="Verde">
        </div>
        <div class="form-group col-12 mb-3">
            <label for="modelo">Detalles</label>
            <input type="text" class="form-control" id="modelo" readonly="" value="Para identificar tu vehículo">
        </div>
        <div class="d-grid gap-2">
              <a class="btn btn-success" href="#editar_vehiculo" type="button">Guardar</a>
              <a class="btn btn-primary" href="#editar_vehiculo" type="button">Volver</a>
        </div>
    </div>
</div>